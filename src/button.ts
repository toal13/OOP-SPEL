class Button {
  private x: number;
  private y: number;
  private width: number;
  private height: number;
  private text: string;
  private onClick: () => void; // Lägg till en klickhändelse

  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    text: string,
    onClick: () => void, // Lägg till en klickhändelse i konstruktorn
  ) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.text = text;
    this.onClick = onClick; // Spara klickhändelsen

    document.addEventListener("click", this.handleMouseClick.bind(this));
  }

  // Metod för att hantera musklick
  private handleMouseClick(event: MouseEvent) {
    // Kolla om musklicket är inom knappens gränser
    if (
      event.clientX >= this.x &&
      event.clientX <= this.x + this.width &&
      event.clientY >= this.y &&
      event.clientY <= this.y + this.height
    ) {
      this.onClick(); // Kalla på klickhändelsen
    }
  }


  draw() {
    // Check if the mouse is over the button
    const isMouseOver = mouseX > this.x && mouseX < this.x + this.width &&
                        mouseY > this.y && mouseY < this.y + this.height;
  
    // Change the background color based on the hover effect
    fill(isMouseOver ? "#333333" : "#111111");
    rect(this.x, this.y, this.width, this.height);
  
    // Change the text color based on the hover effect
    fill(isMouseOver ? "black" : "white");
    
    textSize(22);
    textAlign(CENTER, CENTER);
    text(this.text, this.x + this.width / 2, this.y + this.height / 2);
    textFont("Joti One");
  }
}
