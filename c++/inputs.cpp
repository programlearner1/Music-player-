#include<iostream>
using namespace std;

int main(){
	string a[4];
	int size = sizeof(a)/sizeof(a[0]);
	for (int i=0 ; i<size; i++){
	cout<<"enter the elements : "<<i+1<<"\n";
	getline(cin,a[i]);
	}
	for (string a :a ){
	cout<<a;
	}
	return 0;
}

