package com.cts.casestudy.service;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.cts.casestudy.entities.Task;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TaskManagerServiceTest { 
	
	@Autowired
    private TaskManagerService taskService;

    @Test
    public void findAllTasks() {
    }

    @Test
    public void findById() {
    }

    @Test
    public void updateTask() {
    }

    @Test
    public void addTask() {
        final Task task = new Task();
        task.setTask("Test Task");
        taskService.addTask(task);
    }

    @Test
    public void deleteTask() {
    }
}
