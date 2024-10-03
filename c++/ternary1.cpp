#include<iostream>
using namespace std;


int main(){
	int x;
	cout<<"enter x value: ";
	cin>>x;
	int y;
	cout<<"enter y value : ";
	cin>>y;
	double z= x+y;
	double c=10;
	string result = double (z==c) ? "yes" : "no";
	cout<<result;
	return 0;
}
