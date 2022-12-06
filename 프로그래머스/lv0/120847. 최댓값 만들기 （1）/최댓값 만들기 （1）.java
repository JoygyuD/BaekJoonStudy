class Solution {
    public int solution(int[] numbers) {
        int answer = 0;
        for(int i = 0; i < numbers.length; i++){
            for(int j = 0; j <= i; j++){
                if(j != i) {
                    int tmp = numbers[i] * numbers[j];
                    answer = answer < tmp ? tmp : answer;
                }
            }
        }
        return answer;
    }
}