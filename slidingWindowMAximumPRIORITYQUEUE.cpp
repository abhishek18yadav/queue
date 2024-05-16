#include<iostream>
#include<vector>
#include<math.h>
#include<queue>
#include<climits>
using namespace std;

#define pp pair<int,int>

vector<int> maxSlidingWindow(vector<int>& nums, int k) {
    int mx = INT_MIN;
    vector<int>res;
    priority_queue<pp>pq;
    for(int i=0; i<k; i++){
        pq.push({nums[i],i});
    }
    res.push_back(pq.top().first);
    for(int j=k; j<nums.size(); j++){
        pq.push({nums[j],j});
        while(!pq.empty() and pq.top().second <= j-k){
            pq.pop();
        }
        res.push_back(pq.top().first);
    }
    return res;
}

int main(){
    vector<int>nums{7,2,4};
    int k=2;
    vector<int>ans = maxSlidingWindow(nums,k);
    for(int i=0; i<ans.size(); i++){
        cout<<ans[i]<<" ";
    }
    return 0;
}