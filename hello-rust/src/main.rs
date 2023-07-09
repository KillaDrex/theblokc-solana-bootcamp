use std::io;

fn main() {
    // get input from string
    let mut strng:String = String::new();
    let stdin = io::stdin();
    let _ = stdin.read_line(&mut strng);

    // lowercase the string
    let new_strng:String = strng.to_lowercase();

    let mut i:u8 = 0;
    for ch in new_strng.chars() {
        match ch {
            'a' => {i = i + 1;}
            'e' => {i = i + 1;}
            'i' => {i = i + 1;}
            'o' => {i = i + 1;}
            'u' => {i = i + 1;}
            _ => {}
        }
    }

    // print len
    println!("Number of vowels of String is {}.", i);
}
