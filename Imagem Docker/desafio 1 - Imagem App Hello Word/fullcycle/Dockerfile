FROM openjdk:11-jdk-slim

ADD fullcycle/build/libs/demo-0.0.1-SNAPSHOT.jar maratona.jar

RUN bin/bash -c 'touch /maratona.jar'

ENTRYPOINT ["java", "-Djava.security.egd=file:/dev/./urandom", "-jar", "/maratona.jar"]
