pipeline {
  agent any
  options {
    buildDiscarder(logRotator(numToKeepStr: '5'))
  }
  environment {
    DOCKERHUB_CREDENTIALS = credentials('dockerhub')
  }
  stages {
    stage('Login') {
      steps {
        sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
      }
    }
    stage('Build') {
      steps {
        withCredentials([string(credentialsId: 'kakao-client-ID', variable: 'KAKAO_CLIENT_ID')]) {
          sh 'docker build --build-arg KAKAO_CLIENT_ID=$KAKAO_CLIENT_ID -t dopeteam/tg-web-app:latest .'
          sh 'docker push dopeteam/tg-web-app:latest'
        }
        
      }
    }
    stage('Kubernetes deploy') {
        steps {
            script {
                withKubeConfig([credentialsId: 'kubeconfig', serverUrl: 'https://192.168.219.108:6443']) {
                  sh 'curl -LO "https://storage.googleapis.com/kubernetes-release/release/v1.20.5/bin/linux/amd64/kubectl"'
                  sh 'chmod u+x ./kubectl'
                  sh './kubectl apply -f k8s.yaml'
                  sh "./kubectl rollout restart deployment/tg-web-app -n web-app"
                }
            }
        }
    }
  }
  post {
    always {
      sh 'docker logout'
    }
    success {
      slackSend message: "Core Service Deployed - ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)"
    }
    failure {
      slackSend message: "Core Service Failed - ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)"
    }
  }
}
