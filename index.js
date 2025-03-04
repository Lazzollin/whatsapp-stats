document.getElementById("startBtn").addEventListener("click", async (event) => {
    const file = document.getElementById("fileInput").files[0];
    if (!file) {
        console.error("No file selected.");
        return;
    }

    if (!file.name.endsWith(".zip")) {
        console.error("Please upload a valid ZIP file.");
        return;
    }

    const zip = new JSZip();
    try {
        const zipContent = await zip.loadAsync(file);
        for (const filename in zipContent.files) {
            const zipEntry = zipContent.files[filename];
            if (!zipEntry.dir && filename.endsWith(".txt")) {
                const content = await zipEntry.async("text");
                renderData(processChat(content));
                break;
            }
        }
    } catch (err) {
        console.error("Error reading ZIP file:", err);
    }
});
