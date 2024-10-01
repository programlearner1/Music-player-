#include<iostream>
using namespace std;
int main(){
	srand(time(NULL));
	int s = (rand()%4)+1;
	int guess;
	cout<<"Enter a number : ";
        cin>>guess;
	if (guess == s){
	 cout<<"correct";
 	}
	else if (guess > s){
	cout<<"greater number";
	}
		else {
		cout<<"lower number";
		}	
	return 0;
}
