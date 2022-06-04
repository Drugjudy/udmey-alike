import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51L6pkGSGWJpOCmNqPaDUjSY9ujxprESG8pzqNa6wjeYgIwKS9AD0aQ2O3pS4XDhHFBC96m3iRu1PaKdNAyjKGPXQ00gP4IVR7p"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}