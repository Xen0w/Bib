import { getItemById } from "../db/queries.js";

export async function itemDetaile(req, res) {
    const id = req.params.id; // Extract item ID from URL
    try {
        const items = await getItemById(id); // Fetch item by ID
        if (!items) {
            return res.status(404).send("Item not found");
        }
        res.render("viewItem", { items }); // Render 'viewItem' template with the single item
    } catch (error) {
        console.error("Error fetching item details:", error);
        res.status(500).send("Server error");
    }
}
