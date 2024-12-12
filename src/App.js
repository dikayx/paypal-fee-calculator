import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FaGithub } from "react-icons/fa"; // Import GitHub icon
import "github-fork-ribbon-css/gh-fork-ribbon.css";
import "./App.css";
import Navbar from "./Navbar";
import PayPalFeeCalculator from "./PayPalFeeCalculator";
import FeesOverview from "./FeesOverview";
import { Container, Box, Typography } from "@mui/material";

function App() {
    return (
        <Router basename='/paypal-fee-calculator'>
            <Navbar />
            <Container maxWidth='lg' sx={{ mt: 4 }}>
                <Box
                    sx={{
                        p: 3,
                        borderRadius: 2,
                        boxShadow: 3,
                        backgroundColor: "white",
                    }}
                >
                    <Typography
                        variant='h4'
                        gutterBottom
                        sx={{ textAlign: "center", mb: 4 }}
                    >
                        PayPal Gebühren berechnen
                    </Typography>

                    <Routes>
                        <Route path='/' element={<PayPalFeeCalculator />} />
                        <Route
                            path='/fees-overview'
                            element={<FeesOverview />}
                        />
                    </Routes>
                </Box>
            </Container>

            {/* GitHub Fork Ribbon (Desktop view) */}
            <a
                className='github-fork-ribbon right-bottom'
                href='https://github.com/dikayx/paypal-fee-calculator'
                data-ribbon='Fork me on GitHub'
                title='Fork me on GitHub'
            >
                Fork me on GitHub
            </a>

            {/* GitHub Circle Badge (Mobile view) */}
            <a
                className='github-circle right-bottom-mobile'
                href='https://github.com/dikayx/paypal-fee-calculator'
                title='Fork me on GitHub'
            >
                <FaGithub className='github-icon' />
            </a>
        </Router>
    );
}

export default App;