#include<iostream>
using namespace std;
//declaring a struct (struct is a keyword which is like a library and accepts the all type of datatypes)
//student will act as a datatype now.
struct student{
	//declaring the data types for the variables
	string name;
	int age;
	double number;
};
int main(){
	//using the above declared student as a datatype and made a new student1 obj.
 	student student1;
	student1.name = "ravan";
	student1.age = 30;
	student1.number =1234456788;
	cout<<student1.name<<endl;
	cout<<student1.age<<endl;
	cout<<student1.number<<endl;
	return 0;

}
