import Generate from '../../src/components/options/generate/generate'

test('Devuelve una contraseña', () => {
    const generatedPassword = Generate({ Length: 15, Uppercase: true, Lowercase: true, Numbers: true, Symbols: true });
    expect(generatedPassword).toBeDefined();
});
test('Contiene mayúsculas', () => {
    const generatedPassword = Generate({ Length: 15, Uppercase: true, Lowercase: false, Numbers: false, Symbols: false });
    expect(generatedPassword).toMatch(/[A-Z]/);
});
test('Contiene minúsculas', () => {
    const generatedPassword = Generate({ Length: 15, Uppercase: false, Lowercase: true, Numbers: false, Symbols: false });
    expect(generatedPassword).toMatch(/[a-z]/);
});
test('Contiene números', () => {
    const generatedPassword = Generate({ Length: 15, Uppercase: false, Lowercase: false, Numbers: true, Symbols: false });
    expect(generatedPassword).toMatch(/[0-9]/);
});
test('Contiene caracteres especiales', () => {
    const generatedPassword = Generate({ Length: 15, Uppercase: false, Lowercase: false, Numbers: false, Symbols: true });
    expect(generatedPassword).toMatch(/[!@#$%^&*()_+{}|:"<>?`\-=[\]\\;',./]/);
});
test('Contiene el numero de caracteres correcto', () => {
    const randomLength = Math.ceil(Math.random() * 14)
    const generatedPassword = Generate({ Length: randomLength, Uppercase: true, Lowercase: true, Numbers: true, Symbols: true });
    expect(generatedPassword?.length).toBe(randomLength);
});