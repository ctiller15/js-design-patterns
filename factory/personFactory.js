class Person
{
	constructor(id, name)
	{
		this.id = id;
		this.name = name;
	}
}

class PersonFactory
{
	constructor()
	{
		this.nextId = 0;
	}

	createPerson(name)
	{
		const newPerson = new Person(this.nextId, name);
		this.nextId++;
		return newPerson;
	}
}

const lifeMachine = new PersonFactory();

const person1 = lifeMachine.createPerson("Chris");
console.log(person1);
