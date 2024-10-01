#include<iostream>
using namespace std;
void rev(string &a, string &b);
int main(){
	string a = "pavan";
	string b = "kalyan";
	string temp;
	cout<<"Before a : "<<a;
	cout<<"Before b : "<<b;
	temp = a;
	a=b;
	b=temp;
	cout<<"After a : "<<a;
	cout<<"After b : "<<b;
	rev(a,b);
	return 0;
}
void rev(string &a, string &b){
	string temp;
	temp = a;
	a = b;
	b = temp;
	cout<<"In fun a: "<<a;
	cout<<"In fun b: "<<b;
}

