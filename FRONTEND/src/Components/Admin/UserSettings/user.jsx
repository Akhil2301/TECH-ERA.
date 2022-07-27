import React, { Fragment } from 'react'

function user() {

  return (
    <Fragment>

{/* <div classNameName="text-gray-900 ">
    <div classNameName="p-5 flex">
        <h1 classNameName="text-3xl">
            USER SETTINGS
        </h1>
    </div>
    <div classNameName="px-3 py-4 flex justify-center">
        <table classNameName="w-full text-md bg-white shadow-md rounded mb-4">
            <tbody>
                <tr classNameName="border-b">
                    <th classNameName="text-left p-3 px-5">Name</th>
                    <th classNameName="text-left p-3 px-5">Email</th>
                    <th classNameName="text-left p-3 px-5">Role</th>
                    <th classNameName="text-left p-3 px-5">Action</th>
                    <th></th>
                </tr>
                <tr classNameName="border-b hover:bg-orange-100 bg-gray-100">
                    <td classNameName="p-3 px-5">Akhil</td>
                    <td classNameName="p-3 px-5">akhil@gmail.com</td>
                    <td classNameName="p-3 px-5">akhil@gmail.com</td>
                    <td classNameName="p-3 px-5 flex justify-end"><button type="button" classNameName="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Save</button><button type="button" classNameName="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</div> */}


<div className="flex min-h-screen w-full bg-gray-900">
	<div className="col-span-5 w-full">
		<div className="overflow-auto lg:overflow-visible w-full">
      <h1 className='text-white  justify-center text-center font-bold p-12'>USER SETTINGS</h1>
			<table className=" table text-gray-400 border-separate space-y-6 text-sm w-full">
				<thead className="bg-gray-800 text-gray-500">
					<tr>
						<th className="p-3 text-left">Name</th>
						<th className="p-3 text-left">Email</th>
						<th className="p-3 text-left">Phone</th>
						
						<th className="p-3 text-left">Action</th>
					</tr>
				</thead>
				<tbody>
					<tr className="bg-gray-800">
						<td className="p-3">
							<div className="flex align-items-center">
								<div className="ml-1">
									<div className="text-left">Appple</div>
									<div className="text-gray-500">mail@rgmail.com</div>
								</div>
							</div>
						</td>
						<td className="p-3">
							Technology
						</td>
						<td className="p-3 font-bold">
							200.00$
						</td>
						<td className="p-3">
							<span className="bg-green-400 text-gray-50 rounded-md px-2">available</span>
						</td>
						
					</tr>
			
				</tbody>
			</table>
		</div>
	</div>
</div>
    </Fragment>
  )
}

export default user