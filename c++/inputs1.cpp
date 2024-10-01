#include<iostream>
using namespace std;

int main(){
	string foods[3];
	int size = sizeof(foods)/sizeof(foods[0]);
	for (int i=0;i<size;i++){
		cout<<i+1<<"\n";
		getline(cin,foods[i]);
	}
	for (string foods:foods){
	cout<<foods<<endl;
	}
	return 0;
}


