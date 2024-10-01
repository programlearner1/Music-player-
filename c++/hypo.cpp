#include<iostream>
#include<cmath>
using namespace std;
int main(){
	int a;
	cout<<"enter the value of a : ";
	cin>>a;
	int b;
	cout<<"enter the value of b : ";
	cin>>b;
	double s = pow(a,2);
	double d = pow(b,2);
	double c = sqrt(s+d);
	cout<<"Hypo : "<<c;
	return 0;
}
