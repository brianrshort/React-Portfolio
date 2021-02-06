import React from 'react';

const styles = {
    margin: "auto",
    position: "absolute",
    bottom: 0,
        center: {
            textAlign: "center"
        }
}

export function Footer() {
    return (
        <footer className="footer footer-dark bg-dark mb-0 text-center p-3">
                <div className="container">
                <span className="text-muted">Copyright Internation Footer Consortium LLC (c) 2021</span>
                </div>
        </footer>
    )
}