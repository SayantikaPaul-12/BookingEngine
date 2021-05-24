pipeline{
    environment {
    imagename = "bookingengine"
    dockerImage = ''
  }
    agent any
    stages {
        stage('CheckOut'){
            steps {
                git branch: 'main', url: 'https://github.com/MS396584/BookingEngine.git'
            }
        }
       stage('Build'){
           steps{
             script{
                dockerImage = docker.build imagename
                   }
                }
           }
       stage('Sonar Analysis'){
            steps {
                 withSonarQubeEnv("scan") {
                 sh "${tool("scan")}/bin/sonar-scanner -Dsonar.projectKey=Booking -Dsonar.projectName=BookingEngine -Dsonar.sources=."
                
                                       }
                 }
           }
        stage('run the container'){
            steps{
                sh 'docker tag bookingengine localhost:8095/booking/bookingengine:2.0'
                sh 'docker login -u admin -p admin123 localhost:8095'
                sh 'docker push localhost:8095/booking/bookingengine:2.0'
            }
        }
        stage('nexus'){
            steps{
                sh 'docker pull localhost:8095/booking/bookingengine:2.0'
                sh 'docker run --name booking -p 8089:9090 localhost:8095/booking/bookingengine:2.0'
            }
        }
    }
}
