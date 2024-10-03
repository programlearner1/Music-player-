#include<iostream>
using namespace std;

struct employe{
	string name;
	int age;
	string address;
};
int main(){
	employe emp;
	emp.name="ravi";
	emp.age=25;
	emp.address="knr";
//	emp.ename="eee";


	cout<<emp.name<<"\n";
	cout<<emp.age<<"\n";
	cout<<emp.address<<"\n";
//	cout<<emp.ename;
return 0;
}
