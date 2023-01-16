export default async function SendContactForm(data: any) {
  try {
    await fetch('/api/hello', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
  } catch (error) {
    console.log(error);
  }
}
