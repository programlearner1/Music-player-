#include<iostream>
using namespace std;

class human{
	public:
	string name;
	int age;
	double number;

	void eat(){
		cout<<"this person is eating"<<endl;
	}
	void sleep(){
		cout<<"this person is sleeping";
	}
};

int main(){
	human human1;
	human1.name="pavan";
	human1.age=54;
	human1.number=4587;

	cout<<human1.name<<endl;
	cout<<human1.age<<endl;
	cout<<human1.number<<endl;

	human1.eat();

	human1.sleep();

return 0;
}

