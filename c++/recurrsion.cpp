#include<iostream>
using namespace std;


void main(int a);

int main(){

	main(2);

	return 0;
}
void main(int a){
	int a;
	cout<<"enter a number : ";
	cin>>a;
	for (int i ; i<a;i--){
	int result = a*a;
	cout<<result;
	cout<<a;
}
