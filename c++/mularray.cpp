#include<iostream>
using namespace std;

int main(){
	string cars[][3] = {{"type","model","year"},
			   {"car1","car2","car3"},
			   {"car4","car5","car6"}};
	cout<<cars[1][1];
	return 0;
}
