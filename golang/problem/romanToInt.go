package problem


func RomanToInt(s string) int {
	romans:= map[string]int{
		"I": 1,
		"V": 5,
		"X": 10,
		"L": 50,
		"C": 100,
		"D": 500,
		"M": 1000,
	}

	temp := 0
	for i:=0; i<len(s); i++{
		if(i < len(s)-1){
			if(string(s[i]) == "I" && (string(s[i+1]) == "X" || string(s[i+1]) == "V")){
				temp += romans[string(s[i+1])] - 1
				i++
			} else if(string(s[i]) == "X" && (string(s[i+1]) == "L" || string(s[i+1]) == "C")){
				temp += romans[string(s[i+1])] - 10
				i++
			} else if(string(s[i]) == "C" && (string(s[i+1]) == "D" || string(s[i+1]) == "M")){
				temp += romans[string(s[i+1])] - 100
				i++
			} else {
				temp += romans[string(s[i])]		
			}
		} else {
			temp += romans[string(s[i])]		
		}
	}
	return temp
}