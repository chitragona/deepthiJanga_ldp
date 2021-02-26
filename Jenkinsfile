pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        sh 'CYPRESS_CACHE_FOLDER=$HOME/.cache/Cypress npm install'
      }
    }
    stage('test') {
      steps {
        sh 'CYPRESS_CACHE_FOLDER=$HOME/.cache/Cypress npm test'
        
      }
    }
  }
  post {
        always {
            emailext body: 'A Test EMail', recipientProviders: [[$class: 'DevelopersRecipientProvider'], [$class: 'RequesterRecipientProvider']], subject: 'Test'
        }
    }
}
