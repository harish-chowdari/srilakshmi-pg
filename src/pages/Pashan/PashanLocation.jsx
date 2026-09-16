import React from 'react';
import { ExternalLink, Navigation, Star, Info } from 'lucide-react';

// Exact pinned location
const LATITUDE = 18.5413559;
const LONGITUDE = 73.7804645;

// Direct link to the exact Google Maps pinned location
const MAPS_SHARE_LINK = 'https://maps.app.goo.gl/CcpbUHLpV8cNzbhE7';

// Property address
const PROPERTY_ADDRESS =
	'Sr No: 29/7A, ShivDatta Residency, Datta Niwas Rd, Pashan Sutarwadi Link Rd, Sutarwadi, Pashan, Pune, Maharashtra 411021';

// Directions to exact coordinates
const DIRECTIONS_LINK =
	`https://www.google.com/maps/dir/?api=1&destination=${LATITUDE},${LONGITUDE}`;

function PashanLocation() {
	return (
		<section className="bg-[#F7F8FA] py-16 px-5 sm:px-8 border-t border-gray-200">
			<div className="max-w-6xl mx-auto">

				<h2 className="text-[#0B1526] font-extrabold text-2xl sm:text-3xl mb-8">
					Location
				</h2>

				<div className="relative rounded-2xl overflow-hidden shadow-sm border border-gray-200">

					{/* Google Map using exact coordinates */}
					<iframe
						title="Sri Lakshmi Luxury PG Pashan location"
						src={`https://www.google.com/maps?q=${LATITUDE},${LONGITUDE}&z=18&output=embed`}
						className="w-full h-[420px] sm:h-[480px] lg:h-[520px] border-0"
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					/>

					{/* Location information card */}
					<div className="absolute top-4 left-4 z-10 w-[240px] sm:w-[280px] bg-white rounded-lg shadow-xl p-3.5 sm:p-4">

						<div className="flex items-start justify-between gap-2">

							{/* Clickable property name */}
							<a
								href={MAPS_SHARE_LINK}
								target="_blank"
								rel="noopener noreferrer"
								className="group flex-1"
							>
								<h3 className="text-[#0B1526] font-bold text-sm sm:text-[15px] leading-snug group-hover:text-[#1a73e8] transition-colors">
									Sri Lakshmi Luxury PG Pashan || Pashan
								</h3>
							</a>

							<div className="flex items-center gap-1.5 shrink-0 mt-0.5">

								{/* Open exact Google Maps location */}
								<a
									href={MAPS_SHARE_LINK}
									target="_blank"
									rel="noopener noreferrer"
									className="text-[#5f6368] hover:text-[#1a73e8]"
									aria-label="Open in Google Maps"
								>
									<ExternalLink size={16} />
								</a>

								{/* Directions to exact pin */}
								<a
									href={DIRECTIONS_LINK}
									target="_blank"
									rel="noopener noreferrer"
									className="bg-[#1a73e8] rounded-full w-6 h-6 flex items-center justify-center hover:brightness-110"
									aria-label="Get directions"
								>
									<Navigation size={12} className="text-white" />
								</a>

							</div>
						</div>

						{/* Address */}
						<p className="text-[#1a73e8] text-xs sm:text-[13px] mt-2 leading-relaxed">
							{PROPERTY_ADDRESS}
						</p>

						{/* Navigate button */}
						<a
							href={DIRECTIONS_LINK}
							target="_blank"
							rel="noopener noreferrer"
							className="mt-3 w-full bg-[#1a73e8] hover:bg-[#1557b0] text-white rounded-lg px-3 py-2.5 flex items-center justify-center gap-2 text-sm font-semibold transition-colors"
						>
							<Navigation size={15} />
							Navigate to Location
						</a>

						{/* Rating */}
						<div className="flex items-center gap-1.5 mt-3">

							<span className="text-[#0B1526] text-sm font-semibold">
								5.0
							</span>

							<Star
								size={13}
								className="text-[#f5a623] fill-[#f5a623]"
							/>

							<a
								href={MAPS_SHARE_LINK}
								target="_blank"
								rel="noopener noreferrer"
								className="text-[#1a73e8] text-sm hover:underline"
							>
								(2)
							</a>

							<Info
								size={13}
								className="text-[#5f6368]"
							/>

						</div>

					</div>
				</div>
			</div>
		</section>
	);
}

export default PashanLocation;