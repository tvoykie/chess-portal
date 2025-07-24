import javax.swing.*;
import java.awt.*;

public class ChessBoard extends JPanel {

    public void paintComponent(Graphics g) {
        super.paintComponent(g);
        int size = 60;
        for (int row = 0; row < 8; row++) {
            for (int col = 0; col < 8; col++) {
                boolean light = (row + col) % 2 == 0;
                g.setColor(light ? Color.WHITE : Color.GRAY);
                g.fillRect(col * size, row * size, size, size);
            }
        }
    }

    public static void main(String[] args) {
        JFrame frame = new JFrame("Шахматная доска");
        frame.setSize(500, 500);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.add(new ChessBoard());
        frame.setVisible(true);
    }
}