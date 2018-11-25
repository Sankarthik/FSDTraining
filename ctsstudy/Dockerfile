FROM openjdk:8
RUN groupadd docker && usermod -aG docker jenkins
ADD target/task-manager-springboot.jar  task-mgr-springboot.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "task-mgr-springboot.jar"]
