package com.cts.casestudy.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cts.casestudy.entities.ParentTask;
import com.cts.casestudy.entities.Task;
import com.cts.casestudy.repos.ParentTaskManagerRepository;
import com.cts.casestudy.repos.TaskManagerRepository;

@RestController
@CrossOrigin
public class TaskManagerController {
	
	@Autowired
	TaskManagerRepository repo;
	
	@Autowired
	ParentTaskManagerRepository parentRepo;

	
	@RequestMapping(path="/tasks", method=RequestMethod.GET)
	public List<Task> findAllTasks(){
		return repo.findAll();
	}
	
	@RequestMapping(path="/tasks/{id}", method=RequestMethod.GET)
	public Task findTask(@PathVariable Integer id){
		Optional<Task> task = repo.findById(id);
		return task.isPresent() ? task.get() : null;
	}
	
	@RequestMapping(path="/tasks", method=RequestMethod.POST)
	public void addTask(@RequestBody Task task) {
		if(task.getParentTask() != null) {
			Optional<Task> optTask = repo.findById(task.getParentTask().getId());
			if(optTask.isPresent()) {
				Optional<ParentTask> pt = parentRepo.findById(task.getParentTask().getId());
				/*ParentTask parentTask = pt.isPresent() ? pt.get() : null;
				task.setParentTask(parentTask);*/
				if(pt.isPresent()) {
					task.setParentTask(pt.get());
				} else {
					ParentTask parentTask = new ParentTask();
					parentTask.setId(task.getParentTask().getId());
					parentTask.setName(optTask.get().getName());
					//parentRepo.save(parentTask);
					task.setParentTask(parentTask);
				}
			} else {
				throw new RuntimeException("No Task id is created");
			}
			
		}
		repo.save(task);
	}
	
	@RequestMapping(path="/tasks", method=RequestMethod.PUT)
	public void updateTask(@RequestBody Task task){
		repo.save(task);
	}
	
	@RequestMapping(path="/tasks/{id}", method=RequestMethod.DELETE)
	public void deleteTask(@PathVariable Integer id){
		repo.deleteById(id);
	}
}
