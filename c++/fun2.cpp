#include<iostream>
using namespace std;


void name(string name2){
	string name1 = "pavan ";
	string fullname=name1.append(name2);
	cout<<fullname;

}
	int main(){
	string name2="kalyan";
	name(name2);
	return 0;
}

