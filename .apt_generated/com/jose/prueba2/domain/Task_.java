package com.jose.prueba2.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Task.class)
public abstract class Task_ {

	public static volatile SetAttribute<Task, Job> jobs;
	public static volatile SingularAttribute<Task, String> description;
	public static volatile SingularAttribute<Task, Long> id;
	public static volatile SingularAttribute<Task, String> title;

}

