

<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Library Membership Registration</title>
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>

<div class="container">
    <h1>ʟɪʙʀᴀʀʏ ᴍᴇᴍʙᴇʀꜱʜɪᴘ ʀᴇɢɪꜱᴛʀᴀᴛɪᴏɴ</h1>

    <form id="membershipForm">

        <!-- Personal Information -->
        <section>
            <h2>𝙿𝚎𝚛𝚜𝚘𝚗𝚊𝚕 𝙸𝚗𝚏𝚘𝚛𝚖𝚊𝚝𝚒𝚘𝚗</h2>
            <label for="fullname">ꜰᴜʟʟ ɴᴀᴍᴇ</label>
            <input type="text" id="fullname" placeholder="Enter full name" required>
            <label for="dob">ᴅᴀᴛᴇ ᴏꜰ ʙɪʀᴛʜ</label>
            <input type="date" id="dob" required>
            <label>ɢᴇɴᴅᴇʀ</label>
            <input type="radio" name="gender" value="Male"> Male
            <input type="radio" name="gender" value="Female"> Female
        </section>

        <!-- Contact Details -->
        <section>
            <h2>𝙲𝚘𝚗𝚝𝚊𝚌𝚝 𝙳𝚎𝚝𝚊𝚒𝚕𝚜</h2>
            <label for="email">ᴇᴍᴀɪʟ</label>
            <input type="email" id="email" placeholder="@email.com" required>
            <label for="phone">ᴘʜᴏɴᴇ ɴᴜᴍʙᴇʀ</label>
            <input type="number" id="phone" placeholder="+92" required>
            <label for="address">ᴀᴅᴅʀᴇꜱꜱ</label>
            <textarea id="address" placeholder="Enter address" required></textarea>
        </section>

        <!-- Account Details -->
        <section>
            <h2>𝙰𝚌𝚌𝚘𝚞𝚗𝚝 𝙳𝚎𝚝𝚊𝚒𝚕𝚜</h2>
            <label for="username">ᴜꜱᴇʀɴᴀᴍᴇ</label>
            <input type="text" id="username" required>
            <label for="password">ᴘᴀꜱꜱᴡᴏʀᴅ</label>
            <input type="password" id="password" required>
            <label for="membership">ᴍᴇᴍʙᴇʀꜱʜɪᴘ ᴛʏᴘᴇ</label>
            <select id="membership" required>
                <option value="">Select</option>
                <option>Student</option>
                <option>Teacher</option>
                <option>Public</option>
            </select>
        </section>

        <!-- Additional Info -->
        <section>
            <h2>𝙰𝚍𝚍𝚒𝚝𝚒𝚘𝚗𝚊𝚕 𝙸𝚗𝚏𝚘𝚛𝚖𝚊𝚝𝚒𝚘𝚗</h2>
            <label>ᴘʀᴇꜰᴇʀʀᴇᴅ ɢᴇɴʀᴇꜱ</label>
            <input type="checkbox"> Science
            <input type="checkbox"> Literature
            <input type="checkbox"> History
            <label for="idproof">Upload ID Proof</label>
            <input type="file" id="idproof">
        </section>

        <button type="submit">ʀᴇɢɪꜱᴛᴇʀ</button>
        <button type="reset">ʀᴇꜱᴇᴛ</button>
        <p id="message"></p>
    </form>
</div>

<script src="assets/js/script.js"></script>
</body>
</html>
