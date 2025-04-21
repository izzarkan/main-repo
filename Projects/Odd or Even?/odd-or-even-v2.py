print("Odd or Even?")
print("Type 'Q' to exit.\n")

while True:
    user_input = input("Your number: ").strip()

    if user_input.lower() == 'q':
        print("Exiting the program.")
        break

    if not user_input.isdigit() and not (user_input.startswith('-') and user_input[1:].isdigit()):
        print("Invalid input. Please enter a valid number or 'Q' to quit.\n")
        continue

    number = int(user_input)

    if number % 2 == 0:
        print(f"{number} is an even number.")
    else:
        print(f"{number} is an odd number.")
    
    choice = input("Do you want to try again? (Yes/No): ").strip().lower()
    if choice != 'yes':
        print("Exiting the program.")
        break
    print()
