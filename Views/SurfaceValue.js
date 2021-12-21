function RoomSurface() {
    let Widht = document.getElementById('Widht').value;
    let Length = document.getElementById('Length').value;
    let surface = Widht * Length;
    SurfaceVal.innerHTML = surface + "M2";
}