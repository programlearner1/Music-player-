#include<iostream>
using namespace std;


void fun(){
	string name = "Pavan";
	cout<<"name = "<<name;
}
void fun(string name){
	string name1;
	cout<<"new = "<<name;
}
int main(){
	string lastname = "Reddyrajula";
	cout<<"lastname = "<<lastname;
	fun();
	fun("ravan");
	return 0;

}
