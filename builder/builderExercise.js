class Field
{
	constructor(name)
	{
		this.name = name;
	}

	toString(indent) {
		const newIndent = indent + 2;
		return `${' '.repeat(newIndent)}this.${this.name} = ${this.name};\n`;
	}
}

class CodeBuilder
{
	constructor(className)
	{
		this.className = className;	
		this.fields = [];
	}

	addField(name)
	{
		this.fields.push(new Field(name));
		return this;
	}

	toString()
	{
		const indentSize = 2;

		let content = '';

		if(this.fields.length > 0)
		{
			content = `${' '.repeat(indentSize)}constructor(${this.fields.map(m => m.name).join(', ')}) {\n` +
						`${this.fields.map(field => field.toString(indentSize)).join('')}` +
				`${' '.repeat(indentSize)}}\n`;
		}

		return `class ${this.className} {\n` +
				content  +
				`}`;
	}
}

let cb = new CodeBuilder('Person');
cb.addField('name').addField('age');
console.log(cb.toString());

let cb2 = new CodeBuilder('Foo');
console.log(cb2.toString());
