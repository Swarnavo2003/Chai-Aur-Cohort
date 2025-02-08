# 🌐 Week 1 - The Foundation of the Web ⚔️

# **Phase 0: Web Warriors**

**Objective:**  
Understand how the internet works, the protocols that enable communication, and the fundamental concepts behind web interactions.

---

## 📡 1. How the Internet Works

The internet is a massive network of connected devices that communicate using protocols. It enables the exchange of information globally, forming the backbone of the modern web.

### 🔹 **Key Takeaways**

- The internet is a network of networks, allowing billions of devices to connect.
- The World Wide Web (WWW) runs on top of the internet, using web technologies like HTML, CSS, and JavaScript.
- Data is transferred using packets, ensuring efficient and reliable communication.
- IP addresses act as unique identifiers for devices, while domain names make them human-readable.
- **Concepts Covered:** Internet Service Providers (ISPs), Routers, Domain Name System (DNS).

---

## 🌍 2. DNS Magic and Internals

DNS (Domain Name System) is the internet’s phonebook, translating human-friendly domain names into IP addresses. Without it, we'd have to remember numerical IP addresses instead of website names.

### 🔹 **Key Takeaways**

- DNS resolves domain names (e.g., `google.com`) to IP addresses (e.g., `142.250.182.14`).
- There are different DNS records, such as A (address record), CNAME (alias), MX (mail exchange), and more.
- DNS operates through a hierarchy: Root Servers → TLD Servers → Authoritative Servers.
- Browsers and operating systems cache DNS responses to improve speed.
- **Concepts Covered:** Recursive queries, Caching, TTL (Time-to-Live).

---

## 🖥️ 3. Server-Client Architecture

The web works on a **Client-Server** model, where clients (browsers) request data from servers that host web pages.

### 🔹 **Key Takeaways**

- A client (e.g., browser) sends requests to a server, which processes them and returns responses.
- Web servers (like Apache, Nginx) store and serve web pages to users.
- The **HTTP request-response cycle** includes methods like GET, POST, PUT, DELETE.
- The difference between **Client-Side** and **Server-Side** operations determines where data is processed.
- **Concepts Covered:** Web servers, Request headers, Response codes.

---

## 🔗 4. Internet Protocols

Protocols define the rules of data exchange across networks, ensuring reliable communication between devices.

### **4.1 TCP/IP - The Backbone of the Internet**

The **Transmission Control Protocol (TCP)** and **Internet Protocol (IP)** form the backbone of internet communication.

- TCP ensures **data reliability** by handling segmentation, error checking, and retransmission.
- IP handles **routing**, ensuring that data packets reach the correct destination.
- **Concepts Covered:** IP addressing, Port numbers, Datagram transmission.

### **4.2 UDP - Fast but Unreliable**

The **User Datagram Protocol (UDP)** is an alternative to TCP but focuses on speed rather than reliability.

- Unlike TCP, UDP doesn’t establish a connection before sending data.
- It is used in applications where speed is more important than accuracy, like video streaming and gaming.
- **Concepts Covered:** Datagram-based transmission, Connectionless communication.

---

## 🤝 5. TCP Handshakes and the 3-Way Handshake

Before devices communicate using TCP, they perform a **3-way handshake** to establish a reliable connection.

### 🔹 **Key Takeaways**

- The handshake ensures both devices are ready to communicate.
- It consists of three steps:
  1. **SYN** (Synchronize): The client requests to start communication.
  2. **SYN-ACK** (Acknowledge): The server acknowledges and responds.
  3. **ACK** (Acknowledge): The client confirms, and the connection is established.
- This process prevents packet loss and ensures a stable connection.
- **Concepts Covered:** Reliable connection establishment, Sequence numbers, Acknowledgments.

---

## 🔒 6. HTTP & HTTPS Protocols

**HyperText Transfer Protocol (HTTP)** is the foundation of web communication, defining how data is exchanged between clients and servers. **HTTPS** is its secure counterpart, encrypting data for security.

### 🔹 **Key Takeaways**

- HTTP works in a **request-response** model, where browsers request web pages, and servers return data.
- HTTP status codes help identify issues (e.g., **200 OK**, **404 Not Found**, **500 Internal Server Error**).
- HTTPS adds encryption using **SSL/TLS**, making it secure against cyber threats.
- **Concepts Covered:** Request methods (GET, POST, PUT, DELETE), HTTPS handshake, Certificate Authorities.

---
