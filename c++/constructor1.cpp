#include<iostream>
using namespace std;

class hero{
	public:
		string name;
		int age;
		string industry;

		hero(string x, int y, string z){
			name=x;
			age=y;
			industry=z;
		}
};
int main(){
	hero hero1("prabhas",20,"tolloywood");
	
	cout<<hero1.name<<endl;
	cout<<hero1.age<<endl;
	cout<<hero1.industry;

	return 0;
}
