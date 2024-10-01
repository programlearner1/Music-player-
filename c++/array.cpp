#include<iostream>
using namespace std;

void array(){
	string a[] ={"pavan","kalyan","reddy","rajula"};
	for (int i =0 ; i<sizeof(a)/sizeof(string); i++){ 
	cout<<a[i]<<"\n";
	}
	cout<<sizeof(a[1]);
	
}
int main(){
	array();
	return 0;
}

