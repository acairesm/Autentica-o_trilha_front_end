const API = "https://dummyjson.com";

export async function login(user: string, pass: string) {
    const res = await fetch(`${API}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: user, password: pass }),
 });

 if (!res.ok) throw new Error("Credenciais inválidas");
    return res.json(); // { accessToken, firstName, ... }  
}

export async function perfil(accessToken: string) {
   const res = await fetch(`${API}/auth/me`, {
       method: "GET",
       headers: { "Authorization": `Bearer ${accessToken}` },
   });
   
   if (!res.ok) throw new Error("Erro ao buscar perfil");
   return res.json(); // { firstName, lastName, email, ... }
}