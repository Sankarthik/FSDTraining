FROM openjdk:8
ADD target/task-manager-springboot.jar  task-mgr-springboot.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "task-mgr-springboot.jar"]