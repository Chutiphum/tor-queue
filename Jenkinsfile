pipeline {
  agent any

  environment {
    DOCKER_IMAGE = 'f4rewell2002/tor-queue:latest'
    DOCKER_CREDENTIALS = credentials('dockerhub')
  }

  stages {
    stage('Start Jenkins') {
      steps {
        sh 'echo >>> Start Jenkins'
        sh 'echo docker : user = $DOCKER_CREDENTIALS_USR : password = $DOCKER_CREDENTIALS_PSW'
      }
    }

    stage('Build Docker Image') {
      steps {
        dir('./') {
          sh 'echo >>> Build Docker Image'
          sh 'docker build -t $DOCKER_IMAGE .'
        }
      }
    }

    stage('Push to Docker Hub') {
      steps {
        script {
          sh 'echo $DOCKER_CREDENTIALS_PSW | docker login --username $DOCKER_CREDENTIALS_USR --password-stdin'
          sh 'docker push $DOCKER_IMAGE'
        }
      }
    }

    stage('Clear Docker components') {
      steps {
        script {
          sh 'docker stop $(docker ps -a -q)'  
          sh  'docker rm $(docker ps -a -q)' 
          sh  'docker rmi $(docker images -q)'
          sh 'docker system prune -af'
        }
      }
    }

    stage('Deploy') {
      steps {
        script {
          sh 'docker pull $DOCKER_IMAGE'
          sh 'docker run -d -name app -p 80:80 $DOCKER_IMAGE'
        }
      }
    }
  }

  post {
    always {
      sh 'docker logout'
    }
  }
}
