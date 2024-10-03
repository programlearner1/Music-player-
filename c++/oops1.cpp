#include<iostream>
using namespace std;

class fruits{
	public:
		string name;
		double amount;
		string season;


		void ripe(){
			cout<<"this fruit is rippen u can have it"<<endl;
		}
		void not_ripe(){
			cout<<"this fruit is not rippen u cant have it now"<<endl;
		}
		void fruitname(){
			cout<<name;
		}

};
int main(){
	fruits fruit;
	fruit.name="mango";
	fruit.amount=20;
	fruit.season="summer";

	cout<<fruit.name<<endl;
	cout<<fruit.amount<<endl;
	cout<<fruit.season<<endl;

	fruits fruit1;
	fruit1.name = "banana";
	fruit1.amount=40;
	fruit1.season="every season";

	cout<<fruit1.name<<endl;
	cout<<fruit1.amount<<endl;
	cout<<fruit1.season<<endl;


	fruit.ripe();
	fruit.fruitname();

	fruit1.not_ripe();
	fruit1.fruitname();

	return 0;
}

