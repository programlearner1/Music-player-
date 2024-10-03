#include<iostream>
using namespace std;

class student{
	public:
	string name;
	int age;

	student(string name, int age){//this is a constructor
		//this keyword is used for the same named parameters only if the parameters are different we can directly assign like(name=x)
		this->name=name;
		this->age=age;
	}
};

int main(){
	student student1("pavan",20);
       cout<<student1.name<<endl;
       cout<<student1.age;

return 0;
}
