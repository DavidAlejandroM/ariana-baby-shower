pipeline {
   agent any

  stages {

      stage('build docker image') {
         steps {
            sh "docker build -t ariana ."
         }
      }

      stage('Deploy') {
          steps {
            sh 'docker ps -f name=ariana -q | xargs --no-run-if-empty docker container stop'
            sh 'docker container ls -a -fname=ariana -q | xargs -r docker container rm'
            sh "docker run -d -p 80:80 --name container-ariana ariana"
         }

  }
   }
}