def calc_first_n_terms(n):
    if n == 1:
        return 3

    else:
        prev_term = calc_first_n_terms(n-1)
        return 2*prev_term + 1

print(calc_first_n_terms())