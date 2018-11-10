package com.cts.casestudy.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class ParentTask {

	@Id
	Integer id;
	String name;
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setId(Integer id) {
		this.id = id;
	}	

	public Integer getId() {
		return id;
	}

	public ParentTask(Integer id, String name) {
		super();
		this.id = id;
		this.name = name;
	}

	public ParentTask() {
		super();
	}
}
